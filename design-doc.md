# TS-Bank Initial Design Draft

__(This doc is just for laying out my ideas for the project)__


# Authors: Lilith Tundrus


# What this project is:

The main idea of this project is to simulate a entire banking system (user and admin) where users can deposit, withdraw and manage their (fake) money. Users in this case are 'tellers' inputting the information.

- A CLI-based banking application
- Designed for 'tellers' to locally take money and update the banking system
- An exercise in making 'complex' apps, in TypeScript so it's not too in the weeds ( something like C)
- Eventually, this will use blessed for a 'UI' of sorts



## Base Intended Features:
- Users (tellers) can accept deposits, approve withdrawls and create new accounts for customers
- User information is saved and retrieved (Database features)
- Specific roles for users/tellers that open more features of the system depending on who they are (IE managers can revoke a teller's access)
- A login system (password protected, maybe encrypted. This IS designed to simulate a 70's app)'



# What this project is NOT:
- This will not have a frontend GUI at first
- This is NOT meant to be actually used, just as a practice project



# Architecture Overview

This will start with creating a login/management system before any of the 'business' logic is put in place, then the 'teller' experience can be implemented



# Milestones

- Login Screen Working
- Basic Teller interface working
- Admin features working (adding/removing users)
