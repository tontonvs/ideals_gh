export interface PaystackSetupOptions {
  key: string;
  email: string;
  amount: number; // smallest currency unit (pesewas for GHS)
  currency?: string;
  ref?: string;
  metadata?: Record<string, unknown>;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
}

export interface PaystackHandler {
  openIframe: () => void;
}

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: PaystackSetupOptions) => PaystackHandler;
    };
  }
}
