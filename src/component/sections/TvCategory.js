import React from 'react';
import AllFilterSection from './DropDownFilterForEachSections';
import IndividualCategoryDetailPageNew from './IndividualCategoryDetailPageNew';

function TvCategory() { 
  return (    
    <div>
      {/* <AllFilterSection category="tv" />     */}
      
      <IndividualCategoryDetailPageNew category="tv"/>    
    </div>
  );
}
export default TvCategory