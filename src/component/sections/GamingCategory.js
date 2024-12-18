import React from 'react';

import AllFilterSection from './DropDownFilterForEachSections';
import IndividualCategoryDetailPageNew from './IndividualCategoryDetailPageNew';

function GamingCategory() {
    
  return(
    <div>
       {/* <AllFilterSection category="gaming"/>        */}       
       <IndividualCategoryDetailPageNew category="gaming"/>     
     
    </div>
  );
}

export default GamingCategory