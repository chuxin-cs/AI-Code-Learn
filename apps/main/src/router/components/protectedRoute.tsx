import PageError from "@/pages/sys/error/PageError";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  children: React.ReactNode;
};

export default function ProtectedRoute({ children }: Props) {
  return <ErrorBoundary FallbackComponent={PageError}>{children}</ErrorBoundary>;
}
