# Contributing to Dash VTK

Thank you for your interesting in contributing to this open-source project! Make sure that you have read and understood our [code of conduct](https://github.com/plotly/dash/blob/dev/CODE_OF_CONDUCT.md).

## Setting up the environment

Please follow the following steps for local testing:

1. Clone the repo
```commandline
git clone https://github.com/plotly/dash-vtk.git
```
2. Install `virtualenv` with `pip install virtualenv`.

3. In order to run the Python builds (`npm run build:py`) you need to create a 
venv for this project. Run this:
```commandline
cd dash-vtk
virtualenv venv
source venv/bin/activate  # For Windows: venv\Scripts\activate
pip install -r requirements.txt
```

4. Install the JavaScript dependencies and build the code:
```commandline
npm install
npm run build
```

#### Package manager

The preferred package manager for this project is `npm`. If you are using `yarn`, make sure to delete `yarn.lock` and to update `package-lock.json` before merging a PR.

## Coding Style

Please lint any additions to Python code with `black`:
```commandline
black usage.py
black tests
black demos
```

## Code quality & design

-   Is your code clear? If you had to go back to it in a month, would you be happy to? If someone else had to contribute to it, would they be able to?

    A few suggestions:

    -   Make your variable names descriptive and use the same naming conventions throughout the code.

    -   For more complex pieces of logic, consider putting a comment, and maybe an example.

    -   In the comments, focus on describing _why_ the code does what it does, rather than describing _what_ it does. The reader can most likely read the code, but not necessarily understand why it was necessary.

    -   Don't overdo it in the comments. The code should be clear enough to speak for itself. Stale comments that no longer reflect the intent of the code can hurt code comprehension.

*   Don't repeat yourself. Any time you see that the same piece of logic can be applied in multiple places, factor it out into a function, or variable, and reuse that code.
*   Scan your code for expensive operations (large computations, DOM queries, React re-renders). Have you done your possible to limit their impact? If not, it is going to slow your app down.
*   Can you think of cases where your current code will break? How are you handling errors? Should the user see them as notifications? Should your app try to auto-correct them for them?


## Tests

### Running the tests

Activate your virtualenv:
```commandline
source venv/bin/activate
```

If needed, install the requirements:
```commandline
pip install -r requirements.txt
pip install -r tests/requirements.txt
```

Run the following tests:
```commandline
pytest tests/test_render.py
pytest tests/test_percy.py
```

### Mapbox in CircleCI

Many rendering tests will try to render maps by retrieving them using mapbox tokens. To ensure that the mapbox token is correct, please make sure that an environment variable called `MAPBOX_ACCESS_TOKEN` is defined in [the project settings](https://app.circleci.com/settings/project/github/plotly/dash-vtk/environment-variables) (this link is only accessible if you are a Plotly organization member). The value of the environment variable can be found in your [mapbox account](https://account.mapbox.com/).

### Percy

If you are testing locally, make sure to configure your Percy environment variables correctly:
```commandline
PERCY_BRANCH=local
PERCY_ENABLED=1
PERCY_TOKEN=***************
```

You can find the token in the [project settings of the Percy project](https://percy.io/plotly/dash-vtk/settings). Only members of the Plotly organizations have access to this token.

## Publishing

Create a pull request and tag the Plotly team (`@plotly/dash-core`) and tag / request review from [@xhlulu](https://github.com/xhlulu).

After a review has been done and your changes have been approved, create a prerelease and comment in the PR. Version numbers should follow [semantic versioning][].

To publish or create a prerelease:

1. Check `MANIFEST.in` has all of the extra files (like CSS)
2. Bump version numbers in `package.json`, update the [CHANGELOG](./CHANGELOG.md), and make a pull request
3. Once the pull request is merged into master:
4. Build
```
npm run build
```
5. Create distribution tarball
```
python setup.py sdist bdist_wheel
```
6. Copy the tarball into a separate folder and try to install it and run the examples:
```
virtualenv venv-release
source venv-release/bin/activate
pip install dist/dash_vtk-x.x.x.tar.gz
python usage.py
rm -r venv-release/  # Clean up after you are done
```
7. If the examples work, then publish:
```
npm login  # only if you are not already logged in
npm publish
twine upload dist/*
rm -r dist/
```

8. Verify that the publish worked by installing it:
```
pip install dash-vtk==x.x.x
python usage.py
```

9. Tag your release with git:
```
git tag -a 'vx.x.x' -m 'vx.x.x'
git push origin master --follow-tags
```

Make a post in the [Dash Community Forum](https://community.plotly.com/c/dash)
* Title it `":mega: Announcement! New <Your Feature> - Feedback Welcome"`
* In the description, link to the PR and any relevant issue(s)
* Pin the topic so that it appears at the top of the forum for two weeks

## [Checklists](http://rs.io/unreasonable-effectiveness-of-checklists/)
**Beginner tip:** _Copy and paste this section as a comment in your PR, then check off the boxes as you go!_
### Pre-Merge checklist
- [ ] The project was correctly built with `npm run build`.
- [ ] If there was any conflict, it was solved correctly
- [ ] All changes were documented in `docs/CHANGELOG.md`.
- [ ] All tests on CircleCI have passed.
- [ ] All Percy visual changes have been approved.
- [ ] Two people have :dancer:'d the pull request. You can be one of these people if you are a Dash VTK core contributor.

### Merge step
1. Make sure to *Squash and Merge* your contribution if you have created multiple commits to change a specific feature.
2. Make sure to *Rebase and Merge* if you added many different features, and need to contribute multiple different commits.

### Post-Merge checklist
- [ ] You have tagged the release using `git tag v<version_number>` _(for the contributor merging the PR)_.
- [ ] You have pushed this tag using `git push <tag_name>` _(for the contributor merging the PR)_.
- [ ] You have deleted the branch.

### Pre-Release checklist
- [ ] Everything in the Pre-Merge checklist is completed.
- [ ] `git remote show origin` shows you are in the correct repository.
- [ ] `git branch` shows that you are on the expected branch.
- [ ] `git status` shows that there are no unexpected changes.
- [ ] Both `package.json` and `dash_vtk/package.json` versions have been correctly updated.

### Release Step
Complete the "Publishing" section.

### Post-Release checklist
- [ ] Step 1 and 2 of Post-merge checklist are completed.
- [ ] You have closed all issues that this pull request solves, and commented the new version number users should install.
- [ ] If significant enough, you have created an issue about documenting the new feature or change and you have added it to the [Documentation] project.
- [ ] You have created a pull request in [Dash Docs] with the new release of your feature by editing that project's [`requirements.txt` file](https://github.com/plotly/dash-docs/blob/master/requirements.txt).