# Schemas to serialize Pokemon Model to JSON
from marshmallow import fields

from app.ext import ma


class PokemonSchema(ma.Schema):
    id = fields.Integer(dump_only=True)  #Argument dump_only it is to serialize but not in the models charge
    name = fields.String()
    type_1 = fields.String()
    type_2 = fields.String()
    total = fields.Integer()
    hp = fields.Integer()
    attack = fields.Integer()
    defense = fields.Integer()
    sp_attack = fields.Integer()
    sp_defense = fields.Integer()
    speed = fields.Integer()
    generation = fields.Integer()
    legendary = fields.Boolean()
