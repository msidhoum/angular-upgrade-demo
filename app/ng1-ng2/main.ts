import { UpgradeAdapter } from '@angular/upgrade';

let upgradeAdapter = new UpgradeAdapter();

upgradeAdapter.bootstrap(document.documentElement, ['ng1ng2']);