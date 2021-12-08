import { Aggregators, Editors, Enums, Filters, Formatters, GroupTotalFormatters, SortComparers, Utilities } from '@slickgrid-universal/common';
import { BindingService } from '@slickgrid-universal/binding';
import { EventPubSubService } from '@slickgrid-universal/event-pub-sub';
import { SlickCompositeEditorComponent } from '@slickgrid-universal/composite-editor-component';
import { SlickEmptyWarningComponent } from '@slickgrid-universal/empty-warning-component';
import { SlickPaginationComponent } from '@slickgrid-universal/pagination-component';
import { SalesforceVanillaGridBundle } from './salesforce-vanilla-grid-bundle';

const Slicker = {
  GridBundle: SalesforceVanillaGridBundle,
  Aggregators,
  BindingService,
  Editors,
  Enums,
  Filters,
  Formatters,
  GroupTotalFormatters,
  SortComparers,
  Utilities,
};

// expose the bundle on the global "window" object as Slicker
if (typeof window !== 'undefined') {
  (window as any).Slicker = Slicker;
}

export { BindingService };
export { Aggregators, Editors, Enums, EventPubSubService, Filters, Formatters, GroupTotalFormatters, SortComparers, Utilities };
export { SlickCompositeEditorComponent, SlickEmptyWarningComponent, SlickPaginationComponent, SalesforceVanillaGridBundle }; // export the custom components & interfaces
export { Slicker };
