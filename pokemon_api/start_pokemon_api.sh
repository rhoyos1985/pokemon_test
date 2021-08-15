#!/bin/bash

EnvDirectory="pkmenv"

# Create virtual enviroment and install requirements
if [ ! -d "$EnvDirectory" ];
then
  virtualenv pkmenv
  source pkmenv/bin/activate
  pip install -r requirements.txt
fi

# Export enviroments variables
export FLASK_APP="entrypoint:app"
export FLASK_ENV="development"
export APP_SETTINGS_MODULE="config.default"

# Updated enviroments variables
deactivate
source pkmenv/bin/activate

# Create database
flask db init
flask db migrate -m "Initial pokemon database"
flask db upgrade

# Insert data into the table pokemon
python3 insert_data.py
