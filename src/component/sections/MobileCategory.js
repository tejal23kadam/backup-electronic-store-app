import React from 'react';
import AllFilterSection from './DropDownFilterForEachSections';
import IndividualCategoryDetailPageNew from './IndividualCategoryDetailPageNew';

function MobileCategory() {  
  return (
    <div>
      {/* <AllFilterSection category="mobile" />     */}      
      <IndividualCategoryDetailPageNew category="mobile"/>    
    </div>
  );
}
export default MobileCategory