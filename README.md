# Run Aplications Pokemon

## Install pokemon_api

1. Entry folder pokemon_api ``` cd pokemon_api ```
2. Configuration server
  2.1. Automatic in Mac or Linux
    2.1.1. Excute start_pokemon_api.sh ``` chomd -x start_pokemon_api.sh && ./start_pokemon_api.sh ```
  2.2. Manual Install
    2.2.1. Create virtual enviroment with virtualenv ``` virtualenv virtualenv pkmenv ```
    2.2.2. Activate virtual enviroment
          - Mac or linux ``` source pkmenv/bin/activate ```
          - Windows ``` pkmenv/bin/activate.bat ```
    2.2.3. Install Dependencies ``` pip install -r requirements.txt ```
    2.2.4. Export Enviroments Variables
          - Mac or Linux
            ```
              export FLASK_APP="entrypoint:app"
              export FLASK_ENV="development"
              export APP_SETTINGS_MODULE="config.default"
            ```
          - Windows
            ```
              SET FLASK_APP="entrypoint:app"
              SET FLASK_ENV="development"
              SET APP_SETTINGS_MODULE="config.default"
            ```
    2.2.5 Reboot virtual enviroment
      - ``` deactivate ```
      - ``` source pkmenv/bin/activate ``` or ``` pkmenv/bin/activate.bat ```
    2.2.6 Create Database and Migrations
      - ``` flask db init ```
      - ``` lask db migrate -m "Initial pokemon database" ```
      - ``` flask db upgrade ```
    2.2.7 Insert data in database ``` python3 insert_data.py ```

## Install pokemon_web

1. Entry folder pokemon_web ``` cd pokemon_web ```
2. Install dependencies ``` npm install ```

## Excute api and web

1. Entry folder pokemon_api ``` cd pokemon_api ```
2. Execute ``` flask run ```
3. Entry folder pokemon_web ``` cd pokemon_web ```
4. Execute ``` npm start ```
