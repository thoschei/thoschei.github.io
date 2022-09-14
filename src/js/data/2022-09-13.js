// We should either depend on the file name or this variable and honestly I hate both options
dataSetVersion = "2022-09-13"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      // { name: "Name", tooltip: "Optional tooltip explaining source", key: "readable_key" },
      { name: "Classic Who", key: "classic" },
      { name: "New Who", key: "nuwho" },
      { name: "Big Finish", key: "big_finish" }
    ]
  },
  // Single key filter example
  // {
  //   name: "Remove PC-98 Duplicates",
  //   key: "pc98",
  //   tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  // }
];
// TODO devon 22/9/13: A random Doctor/Master pairing generator might be a fun addition
// TODO devon 22/9/13: We should _absolutely_ be able to generate this list from a list of doctors and a list of masters
// TODO devon 22/9/13: Add images lol
dataSet[dataSetVersion].characterData = [
  // TODO devon 22/9/13: Tag with series to enable filtering
  { name: "One/Koschei", opts: { series: [] } },
  { name: "One/War Chief", opts: { series: [] } },
  { name: "One/Delgado", opts: { series: [] } },
  { name: "One/Crispy", opts: { series: [] } },
  { name: "One/Ainley", opts: { series: [] } },
  { name: "One/Cheetah!Ainley", opts: { series: [] } },
  { name: "One/Goosnake", opts: { series: [] } },
  { name: "One/Roberts", opts: { series: [] } },
  { name: "One/Macqueen", opts: { series: [] } },
  { name: "One/Jacobi", opts: { series: [] } },
  { name: "One/Simm", opts: { series: [] } },
  { name: "One/Missy", opts: { series: [] } },
  { name: "One/Lumiat", opts: { series: [] } },
  { name: "One/Dhawan", opts: { series: [] } },
  { name: "One/Shalka!Master", opts: { series: [] } },
  { name: "One/Fatal Death!Master", opts: { series: [] } },
  { name: "Two/Koschei", opts: { series: [] } },
  { name: "Two/War Chief", opts: { series: [] } },
  { name: "Two/Delgado", opts: { series: [] } },
  { name: "Two/Crispy", opts: { series: [] } },
  { name: "Two/Ainley", opts: { series: [] } },
  { name: "Two/Cheetah!Ainley", opts: { series: [] } },
  { name: "Two/Goosnake", opts: { series: [] } },
  { name: "Two/Roberts", opts: { series: [] } },
  { name: "Two/Macqueen", opts: { series: [] } },
  { name: "Two/Jacobi", opts: { series: [] } },
  { name: "Two/Simm", opts: { series: [] } },
  { name: "Two/Missy", opts: { series: [] } },
  { name: "Two/Lumiat", opts: { series: [] } },
  { name: "Two/Dhawan", opts: { series: [] } },
  { name: "Two/Shalka!Master", opts: { series: [] } },
  { name: "Two/Fatal Death!Master", opts: { series: [] } },
  { name: "Three/Koschei", opts: { series: [] } },
  { name: "Three/War Chief", opts: { series: [] } },
  { name: "Three/Delgado", opts: { series: [] } },
  { name: "Three/Crispy", opts: { series: [] } },
  { name: "Three/Ainley", opts: { series: [] } },
  { name: "Three/Cheetah!Ainley", opts: { series: [] } },
  { name: "Three/Goosnake", opts: { series: [] } },
  { name: "Three/Roberts", opts: { series: [] } },
  { name: "Three/Macqueen", opts: { series: [] } },
  { name: "Three/Jacobi", opts: { series: [] } },
  { name: "Three/Simm", opts: { series: [] } },
  { name: "Three/Missy", opts: { series: [] } },
  { name: "Three/Lumiat", opts: { series: [] } },
  { name: "Three/Dhawan", opts: { series: [] } },
  { name: "Three/Shalka!Master", opts: { series: [] } },
  { name: "Three/Fatal Death!Master", opts: { series: [] } },
  { name: "Four/Koschei", opts: { series: [] } },
  { name: "Four/War Chief", opts: { series: [] } },
  { name: "Four/Delgado", opts: { series: [] } },
  { name: "Four/Crispy", opts: { series: [] } },
  { name: "Four/Ainley", opts: { series: [] } },
  { name: "Four/Cheetah!Ainley", opts: { series: [] } },
  { name: "Four/Goosnake", opts: { series: [] } },
  { name: "Four/Roberts", opts: { series: [] } },
  { name: "Four/Macqueen", opts: { series: [] } },
  { name: "Four/Jacobi", opts: { series: [] } },
  { name: "Four/Simm", opts: { series: [] } },
  { name: "Four/Missy", opts: { series: [] } },
  { name: "Four/Lumiat", opts: { series: [] } },
  { name: "Four/Dhawan", opts: { series: [] } },
  { name: "Four/Shalka!Master", opts: { series: [] } },
  { name: "Four/Fatal Death!Master", opts: { series: [] } },
  { name: "Five/Koschei", opts: { series: [] } },
  { name: "Five/War Chief", opts: { series: [] } },
  { name: "Five/Delgado", opts: { series: [] } },
  { name: "Five/Crispy", opts: { series: [] } },
  { name: "Five/Ainley", opts: { series: [] } },
  { name: "Five/Cheetah!Ainley", opts: { series: [] } },
  { name: "Five/Goosnake", opts: { series: [] } },
  { name: "Five/Roberts", opts: { series: [] } },
  { name: "Five/Macqueen", opts: { series: [] } },
  { name: "Five/Jacobi", opts: { series: [] } },
  { name: "Five/Simm", opts: { series: [] } },
  { name: "Five/Missy", opts: { series: [] } },
  { name: "Five/Lumiat", opts: { series: [] } },
  { name: "Five/Dhawan", opts: { series: [] } },
  { name: "Five/Shalka!Master", opts: { series: [] } },
  { name: "Five/Fatal Death!Master", opts: { series: [] } },
  { name: "Six/Koschei", opts: { series: [] } },
  { name: "Six/War Chief", opts: { series: [] } },
  { name: "Six/Delgado", opts: { series: [] } },
  { name: "Six/Crispy", opts: { series: [] } },
  { name: "Six/Ainley", opts: { series: [] } },
  { name: "Six/Cheetah!Ainley", opts: { series: [] } },
  { name: "Six/Goosnake", opts: { series: [] } },
  { name: "Six/Roberts", opts: { series: [] } },
  { name: "Six/Macqueen", opts: { series: [] } },
  { name: "Six/Jacobi", opts: { series: [] } },
  { name: "Six/Simm", opts: { series: [] } },
  { name: "Six/Missy", opts: { series: [] } },
  { name: "Six/Lumiat", opts: { series: [] } },
  { name: "Six/Dhawan", opts: { series: [] } },
  { name: "Six/Shalka!Master", opts: { series: [] } },
  { name: "Six/Fatal Death!Master", opts: { series: [] } },
  { name: "Seven/Koschei", opts: { series: [] } },
  { name: "Seven/War Chief", opts: { series: [] } },
  { name: "Seven/Delgado", opts: { series: [] } },
  { name: "Seven/Crispy", opts: { series: [] } },
  { name: "Seven/Ainley", opts: { series: [] } },
  { name: "Seven/Cheetah!Ainley", opts: { series: [] } },
  { name: "Seven/Goosnake", opts: { series: [] } },
  { name: "Seven/Roberts", opts: { series: [] } },
  { name: "Seven/Macqueen", opts: { series: [] } },
  { name: "Seven/Jacobi", opts: { series: [] } },
  { name: "Seven/Simm", opts: { series: [] } },
  { name: "Seven/Missy", opts: { series: [] } },
  { name: "Seven/Lumiat", opts: { series: [] } },
  { name: "Seven/Dhawan", opts: { series: [] } },
  { name: "Seven/Shalka!Master", opts: { series: [] } },
  { name: "Seven/Fatal Death!Master", opts: { series: [] } },
  { name: "Eight/Koschei", opts: { series: [] } },
  { name: "Eight/War Chief", opts: { series: [] } },
  { name: "Eight/Delgado", opts: { series: [] } },
  { name: "Eight/Crispy", opts: { series: [] } },
  { name: "Eight/Ainley", opts: { series: [] } },
  { name: "Eight/Cheetah!Ainley", opts: { series: [] } },
  { name: "Eight/Goosnake", opts: { series: [] } },
  { name: "Eight/Roberts", opts: { series: [] } },
  { name: "Eight/Macqueen", opts: { series: [] } },
  { name: "Eight/Jacobi", opts: { series: [] } },
  { name: "Eight/Simm", opts: { series: [] } },
  { name: "Eight/Missy", opts: { series: [] } },
  { name: "Eight/Lumiat", opts: { series: [] } },
  { name: "Eight/Dhawan", opts: { series: [] } },
  { name: "Eight/Shalka!Master", opts: { series: [] } },
  { name: "Eight/Fatal Death!Master", opts: { series: [] } },
  { name: "Nine/Koschei", opts: { series: [] } },
  { name: "Nine/War Chief", opts: { series: [] } },
  { name: "Nine/Delgado", opts: { series: [] } },
  { name: "Nine/Crispy", opts: { series: [] } },
  { name: "Nine/Ainley", opts: { series: [] } },
  { name: "Nine/Cheetah!Ainley", opts: { series: [] } },
  { name: "Nine/Goosnake", opts: { series: [] } },
  { name: "Nine/Roberts", opts: { series: [] } },
  { name: "Nine/Macqueen", opts: { series: [] } },
  { name: "Nine/Jacobi", opts: { series: [] } },
  { name: "Nine/Simm", opts: { series: [] } },
  { name: "Nine/Missy", opts: { series: [] } },
  { name: "Nine/Lumiat", opts: { series: [] } },
  { name: "Nine/Dhawan", opts: { series: [] } },
  { name: "Nine/Shalka!Master", opts: { series: [] } },
  { name: "Nine/Fatal Death!Master", opts: { series: [] } },
  { name: "Ten/Koschei", opts: { series: [] } },
  { name: "Ten/War Chief", opts: { series: [] } },
  { name: "Ten/Delgado", opts: { series: [] } },
  { name: "Ten/Crispy", opts: { series: [] } },
  { name: "Ten/Ainley", opts: { series: [] } },
  { name: "Ten/Cheetah!Ainley", opts: { series: [] } },
  { name: "Ten/Goosnake", opts: { series: [] } },
  { name: "Ten/Roberts", opts: { series: [] } },
  { name: "Ten/Macqueen", opts: { series: [] } },
  { name: "Ten/Jacobi", opts: { series: [] } },
  { name: "Ten/Simm", opts: { series: [] } },
  { name: "Ten/Missy", opts: { series: [] } },
  { name: "Ten/Lumiat", opts: { series: [] } },
  { name: "Ten/Dhawan", opts: { series: [] } },
  { name: "Ten/Shalka!Master", opts: { series: [] } },
  { name: "Ten/Fatal Death!Master", opts: { series: [] } },
  { name: "Eleven/Koschei", opts: { series: [] } },
  { name: "Eleven/War Chief", opts: { series: [] } },
  { name: "Eleven/Delgado", opts: { series: [] } },
  { name: "Eleven/Crispy", opts: { series: [] } },
  { name: "Eleven/Ainley", opts: { series: [] } },
  { name: "Eleven/Cheetah!Ainley", opts: { series: [] } },
  { name: "Eleven/Goosnake", opts: { series: [] } },
  { name: "Eleven/Roberts", opts: { series: [] } },
  { name: "Eleven/Macqueen", opts: { series: [] } },
  { name: "Eleven/Jacobi", opts: { series: [] } },
  { name: "Eleven/Simm", opts: { series: [] } },
  { name: "Eleven/Missy", opts: { series: [] } },
  { name: "Eleven/Lumiat", opts: { series: [] } },
  { name: "Eleven/Dhawan", opts: { series: [] } },
  { name: "Eleven/Shalka!Master", opts: { series: [] } },
  { name: "Eleven/Fatal Death!Master", opts: { series: [] } },
  { name: "Twelve/Koschei", opts: { series: [] } },
  { name: "Twelve/War Chief", opts: { series: [] } },
  { name: "Twelve/Delgado", opts: { series: [] } },
  { name: "Twelve/Crispy", opts: { series: [] } },
  { name: "Twelve/Ainley", opts: { series: [] } },
  { name: "Twelve/Cheetah!Ainley", opts: { series: [] } },
  { name: "Twelve/Goosnake", opts: { series: [] } },
  { name: "Twelve/Roberts", opts: { series: [] } },
  { name: "Twelve/Macqueen", opts: { series: [] } },
  { name: "Twelve/Jacobi", opts: { series: [] } },
  { name: "Twelve/Simm", opts: { series: [] } },
  { name: "Twelve/Missy", opts: { series: [] } },
  { name: "Twelve/Lumiat", opts: { series: [] } },
  { name: "Twelve/Dhawan", opts: { series: [] } },
  { name: "Twelve/Shalka!Master", opts: { series: [] } },
  { name: "Twelve/Fatal Death!Master", opts: { series: [] } },
  { name: "Thirteen/Koschei", opts: { series: [] } },
  { name: "Thirteen/War Chief", opts: { series: [] } },
  { name: "Thirteen/Delgado", opts: { series: [] } },
  { name: "Thirteen/Crispy", opts: { series: [] } },
  { name: "Thirteen/Ainley", opts: { series: [] } },
  { name: "Thirteen/Cheetah!Ainley", opts: { series: [] } },
  { name: "Thirteen/Goosnake", opts: { series: [] } },
  { name: "Thirteen/Roberts", opts: { series: [] } },
  { name: "Thirteen/Macqueen", opts: { series: [] } },
  { name: "Thirteen/Jacobi", opts: { series: [] } },
  { name: "Thirteen/Simm", opts: { series: [] } },
  { name: "Thirteen/Missy", opts: { series: [] } },
  { name: "Thirteen/Lumiat", opts: { series: [] } },
  { name: "Thirteen/Dhawan", opts: { series: [] } },
  { name: "Thirteen/Shalka!Master", opts: { series: [] } },
  { name: "Thirteen/Fatal Death!Master", opts: { series: [] } },
  { name: "Fourteen/Koschei", opts: { series: [] } },
  { name: "Fourteen/War Chief", opts: { series: [] } },
  { name: "Fourteen/Delgado", opts: { series: [] } },
  { name: "Fourteen/Crispy", opts: { series: [] } },
  { name: "Fourteen/Ainley", opts: { series: [] } },
  { name: "Fourteen/Cheetah!Ainley", opts: { series: [] } },
  { name: "Fourteen/Goosnake", opts: { series: [] } },
  { name: "Fourteen/Roberts", opts: { series: [] } },
  { name: "Fourteen/Macqueen", opts: { series: [] } },
  { name: "Fourteen/Jacobi", opts: { series: [] } },
  { name: "Fourteen/Simm", opts: { series: [] } },
  { name: "Fourteen/Missy", opts: { series: [] } },
  { name: "Fourteen/Lumiat", opts: { series: [] } },
  { name: "Fourteen/Dhawan", opts: { series: [] } },
  { name: "Fourteen/Shalka!Master", opts: { series: [] } },
  { name: "Fourteen/Fatal Death!Master", opts: { series: [] } },
  { name: "War!Doctor/Koschei", opts: { series: [] } },
  { name: "War!Doctor/War Chief", opts: { series: [] } },
  { name: "War!Doctor/Delgado", opts: { series: [] } },
  { name: "War!Doctor/Crispy", opts: { series: [] } },
  { name: "War!Doctor/Ainley", opts: { series: [] } },
  { name: "War!Doctor/Cheetah!Ainley", opts: { series: [] } },
  { name: "War!Doctor/Goosnake", opts: { series: [] } },
  { name: "War!Doctor/Roberts", opts: { series: [] } },
  { name: "War!Doctor/Macqueen", opts: { series: [] } },
  { name: "War!Doctor/Jacobi", opts: { series: [] } },
  { name: "War!Doctor/Simm", opts: { series: [] } },
  { name: "War!Doctor/Missy", opts: { series: [] } },
  { name: "War!Doctor/Lumiat", opts: { series: [] } },
  { name: "War!Doctor/Dhawan", opts: { series: [] } },
  { name: "War!Doctor/Shalka!Master", opts: { series: [] } },
  { name: "War!Doctor/Fatal Death!Master", opts: { series: [] } },
  { name: "Fugitive!Doctor/Koschei", opts: { series: [] } },
  { name: "Fugitive!Doctor/War Chief", opts: { series: [] } },
  { name: "Fugitive!Doctor/Delgado", opts: { series: [] } },
  { name: "Fugitive!Doctor/Crispy", opts: { series: [] } },
  { name: "Fugitive!Doctor/Ainley", opts: { series: [] } },
  { name: "Fugitive!Doctor/Cheetah!Ainley", opts: { series: [] } },
  { name: "Fugitive!Doctor/Goosnake", opts: { series: [] } },
  { name: "Fugitive!Doctor/Roberts", opts: { series: [] } },
  { name: "Fugitive!Doctor/Macqueen", opts: { series: [] } },
  { name: "Fugitive!Doctor/Jacobi", opts: { series: [] } },
  { name: "Fugitive!Doctor/Simm", opts: { series: [] } },
  { name: "Fugitive!Doctor/Missy", opts: { series: [] } },
  { name: "Fugitive!Doctor/Lumiat", opts: { series: [] } },
  { name: "Fugitive!Doctor/Dhawan", opts: { series: [] } },
  { name: "Fugitive!Doctor/Shalka!Master", opts: { series: [] } },
  { name: "Fugitive!Doctor/Fatal Death!Master", opts: { series: [] } },
  { name: "Theta/Koschei", opts: { series: [] } },
  { name: "Theta/War Chief", opts: { series: [] } },
  { name: "Theta/Delgado", opts: { series: [] } },
  { name: "Theta/Crispy", opts: { series: [] } },
  { name: "Theta/Ainley", opts: { series: [] } },
  { name: "Theta/Cheetah!Ainley", opts: { series: [] } },
  { name: "Theta/Goosnake", opts: { series: [] } },
  { name: "Theta/Roberts", opts: { series: [] } },
  { name: "Theta/Macqueen", opts: { series: [] } },
  { name: "Theta/Jacobi", opts: { series: [] } },
  { name: "Theta/Simm", opts: { series: [] } },
  { name: "Theta/Missy", opts: { series: [] } },
  { name: "Theta/Lumiat", opts: { series: [] } },
  { name: "Theta/Dhawan", opts: { series: [] } },
  { name: "Theta/Shalka!Master", opts: { series: [] } },
  { name: "Theta/Fatal Death!Master", opts: { series: [] } },
  { name: "Valeyard/Koschei", opts: { series: [] } },
  { name: "Valeyard/War Chief", opts: { series: [] } },
  { name: "Valeyard/Delgado", opts: { series: [] } },
  { name: "Valeyard/Crispy", opts: { series: [] } },
  { name: "Valeyard/Ainley", opts: { series: [] } },
  { name: "Valeyard/Cheetah!Ainley", opts: { series: [] } },
  { name: "Valeyard/Goosnake", opts: { series: [] } },
  { name: "Valeyard/Roberts", opts: { series: [] } },
  { name: "Valeyard/Macqueen", opts: { series: [] } },
  { name: "Valeyard/Jacobi", opts: { series: [] } },
  { name: "Valeyard/Simm", opts: { series: [] } },
  { name: "Valeyard/Missy", opts: { series: [] } },
  { name: "Valeyard/Lumiat", opts: { series: [] } },
  { name: "Valeyard/Dhawan", opts: { series: [] } },
  { name: "Valeyard/Shalka!Master", opts: { series: [] } },
  { name: "Valeyard/Fatal Death!Master", opts: { series: [] } },
  { name: "Dream Lord/Koschei", opts: { series: [] } },
  { name: "Dream Lord/War Chief", opts: { series: [] } },
  { name: "Dream Lord/Delgado", opts: { series: [] } },
  { name: "Dream Lord/Crispy", opts: { series: [] } },
  { name: "Dream Lord/Ainley", opts: { series: [] } },
  { name: "Dream Lord/Cheetah!Ainley", opts: { series: [] } },
  { name: "Dream Lord/Goosnake", opts: { series: [] } },
  { name: "Dream Lord/Roberts", opts: { series: [] } },
  { name: "Dream Lord/Macqueen", opts: { series: [] } },
  { name: "Dream Lord/Jacobi", opts: { series: [] } },
  { name: "Dream Lord/Simm", opts: { series: [] } },
  { name: "Dream Lord/Missy", opts: { series: [] } },
  { name: "Dream Lord/Lumiat", opts: { series: [] } },
  { name: "Dream Lord/Dhawan", opts: { series: [] } },
  { name: "Dream Lord/Shalka!Master", opts: { series: [] } },
  { name: "Dream Lord/Fatal Death!Master", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Koschei", opts: { series: [] } },
  { name: "Metacrisis!Doctor/War Chief", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Delgado", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Crispy", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Ainley", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Cheetah!Ainley", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Goosnake", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Roberts", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Macqueen", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Jacobi", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Simm", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Missy", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Lumiat", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Dhawan", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Shalka!Master", opts: { series: [] } },
  { name: "Metacrisis!Doctor/Fatal Death!Master", opts: { series: [] } },
  { name: "Shalka!Doctor/Koschei", opts: { series: [] } },
  { name: "Shalka!Doctor/War Chief", opts: { series: [] } },
  { name: "Shalka!Doctor/Delgado", opts: { series: [] } },
  { name: "Shalka!Doctor/Crispy", opts: { series: [] } },
  { name: "Shalka!Doctor/Ainley", opts: { series: [] } },
  { name: "Shalka!Doctor/Cheetah!Ainley", opts: { series: [] } },
  { name: "Shalka!Doctor/Goosnake", opts: { series: [] } },
  { name: "Shalka!Doctor/Roberts", opts: { series: [] } },
  { name: "Shalka!Doctor/Macqueen", opts: { series: [] } },
  { name: "Shalka!Doctor/Jacobi", opts: { series: [] } },
  { name: "Shalka!Doctor/Simm", opts: { series: [] } },
  { name: "Shalka!Doctor/Missy", opts: { series: [] } },
  { name: "Shalka!Doctor/Lumiat", opts: { series: [] } },
  { name: "Shalka!Doctor/Dhawan", opts: { series: [] } },
  { name: "Shalka!Doctor/Shalka!Master", opts: { series: [] } },
  { name: "Shalka!Doctor/Fatal Death!Master", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Koschei", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/War Chief", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Delgado", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Crispy", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Ainley", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Cheetah!Ainley", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Goosnake", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Roberts", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Macqueen", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Jacobi", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Simm", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Missy", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Lumiat", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Dhawan", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Shalka!Master", opts: { series: [] } },
  { name: "Fatal Death!Thirteen/Fatal Death!Master", opts: { series: [] } },
  { name: "Curator/Koschei", opts: { series: [] } },
  { name: "Curator/War Chief", opts: { series: [] } },
  { name: "Curator/Delgado", opts: { series: [] } },
  { name: "Curator/Crispy", opts: { series: [] } },
  { name: "Curator/Ainley", opts: { series: [] } },
  { name: "Curator/Cheetah!Ainley", opts: { series: [] } },
  { name: "Curator/Goosnake", opts: { series: [] } },
  { name: "Curator/Roberts", opts: { series: [] } },
  { name: "Curator/Macqueen", opts: { series: [] } },
  { name: "Curator/Jacobi", opts: { series: [] } },
  { name: "Curator/Simm", opts: { series: [] } },
  { name: "Curator/Missy", opts: { series: [] } },
  { name: "Curator/Lumiat", opts: { series: [] } },
  { name: "Curator/Dhawan", opts: { series: [] } },
  { name: "Curator/Shalka!Master", opts: { series: [] } },
  { name: "Curator/Fatal Death!Master", opts: { series: [] } },
  { name: "Jackson Lake/Koschei", opts: { series: [] } },
  { name: "Jackson Lake/War Chief", opts: { series: [] } },
  { name: "Jackson Lake/Delgado", opts: { series: [] } },
  { name: "Jackson Lake/Crispy", opts: { series: [] } },
  { name: "Jackson Lake/Ainley", opts: { series: [] } },
  { name: "Jackson Lake/Cheetah!Ainley", opts: { series: [] } },
  { name: "Jackson Lake/Goosnake", opts: { series: [] } },
  { name: "Jackson Lake/Roberts", opts: { series: [] } },
  { name: "Jackson Lake/Macqueen", opts: { series: [] } },
  { name: "Jackson Lake/Jacobi", opts: { series: [] } },
  { name: "Jackson Lake/Simm", opts: { series: [] } },
  { name: "Jackson Lake/Missy", opts: { series: [] } },
  { name: "Jackson Lake/Lumiat", opts: { series: [] } },
  { name: "Jackson Lake/Dhawan", opts: { series: [] } },
  { name: "Jackson Lake/Shalka!Master", opts: { series: [] } },
  { name: "Jackson Lake/Fatal Death!Master", opts: { series: [] } },
  { name: "Timeless Child/Koschei", opts: { series: [] } },
  { name: "Timeless Child/War Chief", opts: { series: [] } },
  { name: "Timeless Child/Delgado", opts: { series: [] } },
  { name: "Timeless Child/Crispy", opts: { series: [] } },
  { name: "Timeless Child/Ainley", opts: { series: [] } },
  { name: "Timeless Child/Cheetah!Ainley", opts: { series: [] } },
  { name: "Timeless Child/Goosnake", opts: { series: [] } },
  { name: "Timeless Child/Roberts", opts: { series: [] } },
  { name: "Timeless Child/Macqueen", opts: { series: [] } },
  { name: "Timeless Child/Jacobi", opts: { series: [] } },
  { name: "Timeless Child/Simm", opts: { series: [] } },
  { name: "Timeless Child/Missy", opts: { series: [] } },
  { name: "Timeless Child/Lumiat", opts: { series: [] } },
  { name: "Timeless Child/Dhawan", opts: { series: [] } },
  { name: "Timeless Child/Shalka!Master", opts: { series: [] } },
  { name: "Timeless Child/Fatal Death!Master", opts: { series: [] } },
  { name: "Unbound!One/Koschei", opts: { series: [] } },
  { name: "Unbound!One/War Chief", opts: { series: [] } },
  { name: "Unbound!One/Delgado", opts: { series: [] } },
  { name: "Unbound!One/Crispy", opts: { series: [] } },
  { name: "Unbound!One/Ainley", opts: { series: [] } },
  { name: "Unbound!One/Cheetah!Ainley", opts: { series: [] } },
  { name: "Unbound!One/Goosnake", opts: { series: [] } },
  { name: "Unbound!One/Roberts", opts: { series: [] } },
  { name: "Unbound!One/Macqueen", opts: { series: [] } },
  { name: "Unbound!One/Jacobi", opts: { series: [] } },
  { name: "Unbound!One/Simm", opts: { series: [] } },
  { name: "Unbound!One/Missy", opts: { series: [] } },
  { name: "Unbound!One/Lumiat", opts: { series: [] } },
  { name: "Unbound!One/Dhawan", opts: { series: [] } },
  { name: "Unbound!One/Shalka!Master", opts: { series: [] } },
  { name: "Unbound!One/Fatal Death!Master", opts: { series: [] } },
  { name: "Unbound!Two/Koschei", opts: { series: [] } },
  { name: "Unbound!Two/War Chief", opts: { series: [] } },
  { name: "Unbound!Two/Delgado", opts: { series: [] } },
  { name: "Unbound!Two/Crispy", opts: { series: [] } },
  { name: "Unbound!Two/Ainley", opts: { series: [] } },
  { name: "Unbound!Two/Cheetah!Ainley", opts: { series: [] } },
  { name: "Unbound!Two/Goosnake", opts: { series: [] } },
  { name: "Unbound!Two/Roberts", opts: { series: [] } },
  { name: "Unbound!Two/Macqueen", opts: { series: [] } },
  { name: "Unbound!Two/Jacobi", opts: { series: [] } },
  { name: "Unbound!Two/Simm", opts: { series: [] } },
  { name: "Unbound!Two/Missy", opts: { series: [] } },
  { name: "Unbound!Two/Lumiat", opts: { series: [] } },
  { name: "Unbound!Two/Dhawan", opts: { series: [] } },
  { name: "Unbound!Two/Shalka!Master", opts: { series: [] } },
  { name: "Unbound!Two/Fatal Death!Master", opts: { series: [] } },
  { name: "Unbound!Three/Koschei", opts: { series: [] } },
  { name: "Unbound!Three/War Chief", opts: { series: [] } },
  { name: "Unbound!Three/Delgado", opts: { series: [] } },
  { name: "Unbound!Three/Crispy", opts: { series: [] } },
  { name: "Unbound!Three/Ainley", opts: { series: [] } },
  { name: "Unbound!Three/Cheetah!Ainley", opts: { series: [] } },
  { name: "Unbound!Three/Goosnake", opts: { series: [] } },
  { name: "Unbound!Three/Roberts", opts: { series: [] } },
  { name: "Unbound!Three/Macqueen", opts: { series: [] } },
  { name: "Unbound!Three/Jacobi", opts: { series: [] } },
  { name: "Unbound!Three/Simm", opts: { series: [] } },
  { name: "Unbound!Three/Missy", opts: { series: [] } },
  { name: "Unbound!Three/Lumiat", opts: { series: [] } },
  { name: "Unbound!Three/Dhawan", opts: { series: [] } },
  { name: "Unbound!Three/Shalka!Master", opts: { series: [] } },
  { name: "Unbound!Three/Fatal Death!Master", opts: { series: [] } },
  { name: "Ten's Hand/Koschei", opts: { series: [] } },
  { name: "Ten's Hand/War Chief", opts: { series: [] } },
  { name: "Ten's Hand/Delgado", opts: { series: [] } },
  { name: "Ten's Hand/Crispy", opts: { series: [] } },
  { name: "Ten's Hand/Ainley", opts: { series: [] } },
  { name: "Ten's Hand/Cheetah!Ainley", opts: { series: [] } },
  { name: "Ten's Hand/Goosnake", opts: { series: [] } },
  { name: "Ten's Hand/Roberts", opts: { series: [] } },
  { name: "Ten's Hand/Macqueen", opts: { series: [] } },
  { name: "Ten's Hand/Jacobi", opts: { series: [] } },
  { name: "Ten's Hand/Simm", opts: { series: [] } },
  { name: "Ten's Hand/Missy", opts: { series: [] } },
  { name: "Ten's Hand/Lumiat", opts: { series: [] } },
  { name: "Ten's Hand/Dhawan", opts: { series: [] } },
  { name: "Ten's Hand/Shalka!Master", opts: { series: [] } },
  { name: "Ten's Hand/Fatal Death!Master", opts: { series: [] } },
  { name: "Wax!Four/Koschei", opts: { series: [] } },
  { name: "Wax!Four/War Chief", opts: { series: [] } },
  { name: "Wax!Four/Delgado", opts: { series: [] } },
  { name: "Wax!Four/Crispy", opts: { series: [] } },
  { name: "Wax!Four/Ainley", opts: { series: [] } },
  { name: "Wax!Four/Cheetah!Ainley", opts: { series: [] } },
  { name: "Wax!Four/Goosnake", opts: { series: [] } },
  { name: "Wax!Four/Roberts", opts: { series: [] } },
  { name: "Wax!Four/Macqueen", opts: { series: [] } },
  { name: "Wax!Four/Jacobi", opts: { series: [] } },
  { name: "Wax!Four/Simm", opts: { series: [] } },
  { name: "Wax!Four/Missy", opts: { series: [] } },
  { name: "Wax!Four/Lumiat", opts: { series: [] } },
  { name: "Wax!Four/Dhawan", opts: { series: [] } },
  { name: "Wax!Four/Shalka!Master", opts: { series: [] } },
  { name: "Wax!Four/Fatal Death!Master", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Koschei", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/War Chief", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Delgado", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Crispy", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Ainley", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Cheetah!Ainley", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Goosnake", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Roberts", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Macqueen", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Jacobi", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Simm", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Missy", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Lumiat", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Dhawan", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Shalka!Master", opts: { series: [] } },
  { name: "Faction Paradox!Doctor/Fatal Death!Master", opts: { series: [] } },
  { name: "Zagreus/Koschei", opts: { series: [] } },
  { name: "Zagreus/War Chief", opts: { series: [] } },
  { name: "Zagreus/Delgado", opts: { series: [] } },
  { name: "Zagreus/Crispy", opts: { series: [] } },
  { name: "Zagreus/Ainley", opts: { series: [] } },
  { name: "Zagreus/Cheetah!Ainley", opts: { series: [] } },
  { name: "Zagreus/Goosnake", opts: { series: [] } },
  { name: "Zagreus/Roberts", opts: { series: [] } },
  { name: "Zagreus/Macqueen", opts: { series: [] } },
  { name: "Zagreus/Jacobi", opts: { series: [] } },
  { name: "Zagreus/Simm", opts: { series: [] } },
  { name: "Zagreus/Missy", opts: { series: [] } },
  { name: "Zagreus/Lumiat", opts: { series: [] } },
  { name: "Zagreus/Dhawan", opts: { series: [] } },
  { name: "Zagreus/Shalka!Master", opts: { series: [] } },
  { name: "Zagreus/Fatal Death!Master", opts: { series: [] } },
];
