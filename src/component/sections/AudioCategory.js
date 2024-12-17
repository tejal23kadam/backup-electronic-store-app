import React from 'react';
import AllFilterSection from './DropDownFilterForEachSections';
import IndividualCategoryDetailPageNew from './IndividualCategoryDetailPageNew';


function AudioCategory() { 
  return (
    <div>
      {/* <AllFilterSection category="audio" />  */}
      <IndividualCategoryDetailPageNew category="audio"/>     
    </div>
  );
}
export default AudioCategory