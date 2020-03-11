import { WebPlugin } from '@capacitor/core';
import { CapacitorStripeUiPlugin } from './definitions';

export class CapacitorStripeUiWeb extends WebPlugin implements CapacitorStripeUiPlugin {
  constructor() {
    super({
      name: 'CapacitorStripeUi',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const CapacitorStripeUi = new CapacitorStripeUiWeb();

export { CapacitorStripeUi };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CapacitorStripeUi);
