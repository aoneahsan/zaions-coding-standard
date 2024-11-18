# General Coding Rules

- how useEffect, useIonViewWillEnter, & useIonViewWillLeave works?
  - useEffect runs when the page is mounded || one of it's dependencies changes & in ionic if the page is mounded then it will not unMount until we refresh the app. that's way if we pass empty dependence it will run one because the page is mount.
  - In ionic we have useIonViewWillEnter & useIonViewWillLeave hook. the useIonViewWillEnter run when the page get focused, the page is visible in browser. and useIonViewWillLeave will run when the page is about to close.
  - for example in createNewShortLink I went to fetch data from backend every time the view is entered but I am using useEffect there where I should use useIonViewWillEnter. 1/June/2023

- object and array value assign to new "const -> variables"
  - must destruct before assigning, as objects and arrays are reference type
  - INVALID: const newArray/ObjectName = "oldArray -> ObjectName"
  - VALID: const newArray/ObjectName = "[...oldArrayName] || {...oldObjectName}"
