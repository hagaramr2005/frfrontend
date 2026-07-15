import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CircleCheck, CircleAlert, Info, X } from "lucide-react";
import { cn } from "../../utils/cn";

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastInput {
  title: string;
  description?: string;
  tone?: "success" | "error" | "info";
  action?: ToastAction;
}

interface ToastItem extends ToastInput {
  id: string;
}

interface ToastContextValue {
  showToast: (toast: ToastInput) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const MAX_VISIBLE = 3;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState<ToastItem[]>([]);
  const queueRef = useRef<ToastItem[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    setVisible((prev) => prev.filter((t) => t.id !== id));
    timers.current.delete(id);
    setVisible((prev) => {
      if (prev.length < MAX_VISIBLE && queueRef.current.length > 0) {
        const next = queueRef.current.shift()!;
        return [next, ...prev];
      }
      return prev;
    });
  }, []);

  const showToast = useCallback(
    (toast: ToastInput) => {
      const item: ToastItem = { ...toast, id: crypto.randomUUID() };
      const persistent = Boolean(item.action);

      setVisible((prev) => {
        if (prev.length >= MAX_VISIBLE) {
          queueRef.current.push(item);
          return prev;
        }
        return [item, ...prev];
      });

      if (!persistent) {
        const timer = setTimeout(() => dismiss(item.id), 6000);
        timers.current.set(item.id, timer);
      }
    },
    [dismiss]
  );

  const icons = { success: CircleCheck, error: CircleAlert, info: Info };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {createPortal(
        <div className="fixed bottom-6 right-6 z-toast flex flex-col-reverse gap-3" role="region" aria-label="Notifications">
          <AnimatePresence>
            {visible.map((t) => {
              const Icon = icons[t.tone ?? "info"];
              return (
                <motion.div
                  key={t.id}
                  role="status"
                  initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="flex w-80 items-start gap-3 rounded-md border border-stone-300 bg-ivory-25 p-4 shadow-modal"
                >
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className={cn(
                      t.tone === "success" && "text-success",
                      t.tone === "error" && "text-error",
                      (!t.tone || t.tone === "info") && "text-info"
                    )}
                  />
                  <div className="flex-1">
                    <p className="text-body-sm font-medium text-ink-500">{t.title}</p>
                    {t.description && <p className="text-body-sm text-ink-400">{t.description}</p>}
                    {t.action && (
                      <button
                        onClick={() => {
                          t.action?.onClick();
                          dismiss(t.id);
                        }}
                        className="mt-2 text-body-sm font-medium text-copper-700 hover:underline"
                      >
                        {t.action.label}
                      </button>
                    )}
                  </div>
                  <button onClick={() => dismiss(t.id)} aria-label="Dismiss notification" className="text-ink-400 hover:text-copper-700">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within a ToastProvider");
  return ctx;
}
