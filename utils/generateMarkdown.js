// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # DESCRIPTION
  ${data.description}

  # TABLE OF CONTENTS
  ${data.table}

  # INSTALLATION
  ${data.install}

  # USAGE
  ${data.usage}

  # CONTRIBUTION
  ${data.contribution}

  # TEST
  ${data.Test}

  ## BADGE

  ## QUESTIONS
  ${data.question}

`;
}

module.exports = generateMarkdown;
