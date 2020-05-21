# Form component

A small mock up of a multi-stage form

# Project Set-up

- Navigate to the root directory
- Run 'npm install'
- Run 'npm run start' to spin up the local dev environment
- Go to 'http://localhost:8080/' in your browser to view page (it should open automatically)

- Run 'npm run build' to compile for production. The compiled app will be found in the /dist directory.
- Run 'npm run jest' to run unit tests on components in the src

# Build choices

Unit testing has been included on the component level using React Testing Library.
Simple integration testing on the container level also achieved with React Testing Library to mimic user behaviour.
Styling is implemented with css-in-js using emotion.
Linting is based primarily on Prettier with a few custom rule settings.
As the form is essentially a single form with a singular output split into multiple parts, it has been implemented into a single container with multiple components to be rendered in stages. Routing has not been implemented as in this case it would not make sense for a user to start the form journey part way through. Additional validation can be added on a component basis.
