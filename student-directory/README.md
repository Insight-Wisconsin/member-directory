# Insight Member Directory

Welcome! In this activity you will learn the basic Git workflow: cloning, branching, committing, pushing, and opening a Pull Request (PR).

When everyone contributes, your info will show up on a live **Student Directory webpage**. 

----

## Instructions

Follow these steps carefully to complete the activity:

```bash
# 1. Clone the repository
git clone git@github.com:YOUR-ORG/student-directory.git
cd student-directory

# 2. Create a new branch with your name (use format firstname-lastname, no spaces)
git checkout -b firstname-lastname

# 3. Add your profile JSON file inside the students/ folder
# Example: students/jane-doe.json
# {
#   "firstName": "Jane",
#   "lastName": "Doe",
#   "github": "janedoe",
#   "funFact": "I love climbing mountains!"
# }

# Create your JSON file (replace with your own info)
echo '{ "firstName": "FIRST", "lastName": "LAST", "github": "USERNAME", "funFact": "Something fun about you!" }' > students/firstname-lastname.json

# 4. Stage your changes
git add students/firstname-lastname.json

# 5. Commit your changes
git commit -m "Add firstname-lastname profile"

# 6. Push your branch to GitHub
git push origin firstname-lastname

