import { Component, type ReactNode } from "react";
import { ErrorState } from "../components/ui/ErrorState";

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}

export class RouteErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    // eslint-disable-next-line no-console
    console.error("Route error:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="pt-30">
          <ErrorState
            title="Something went wrong."
            description="This page hit an unexpected error. Try reloading, or head back to the homepage."
            retryAction={{ label: "Reload", onClick: () => window.location.reload() }}
            supportLink={{ label: "Contact support", href: "mailto:hello@phronesis.edu" }}
          />
        </div>
      );
    }
    return this.props.children;
  }
}
