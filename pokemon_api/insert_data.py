import os
import csv
from sqlite3 import connect

from config.default import SQLALCHEMY_DATABASE_URI


pokemon_db = './app/pokemons.sqlite'

print(pokemon_db)

conn = connect(pokemon_db)
curs = conn.cursor()

with open('pokemon.csv', newline='') as File:
    reader = csv.reader(File)
    query = ''' INSERT INTO pokemon(name, type_1, type_2, total, hp, attack, defense, sp_attack, sp_defense, generation, legendary)
                VALUES(?,?,?,?,?,?,?,?,?,?,?)  '''

    next(reader)

    for row in reader:
        pokemon_desc =(row[1],
                       row[2],
                       row[3],
                       row[4],
                       row[5],
                       row[6],
                       row[7],
                       row[8],
                       row[9],
                       row[10],
                       row[11])

        curs.execute(query, pokemon_desc)

conn.commit()
conn.close()
