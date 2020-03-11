declare module "@capacitor/core" {
  interface PluginRegistry {
    CapacitorStripeUi: CapacitorStripeUiPlugin;
  }
}

export interface CapacitorStripeUiPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
