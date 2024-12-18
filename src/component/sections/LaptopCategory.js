import React from 'react';
import AllFilterSection from './DropDownFilterForEachSections';
import IndividualCategoryDetailPageNew from './IndividualCategoryDetailPageNew';

function LaptopCategory() { 
  return (
    <div>
      {/* <AllFilterSection category="laptop"  />    */}
      <IndividualCategoryDetailPageNew category="laptop"/>     
    </div>
  );
}

export default LaptopCategory