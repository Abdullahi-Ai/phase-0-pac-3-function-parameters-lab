// Function that takes one argument and returns a phrase with that name
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Function that takes two arguments and returns a phrase with those arguments
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Function that takes two arguments, with a default for the second one
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  