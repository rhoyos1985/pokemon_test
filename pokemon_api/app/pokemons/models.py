# File to create models
from sqlalchemy import event

from app.db import db, BaseModeMixin


class Pokemon(db.Model, BaseModeMixin):
    __tablename__= 'pokemon'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    type_1 = db.Column(db.String)
    type_2 = db.Column(db.String)
    total = db.Column(db.Integer)
    hp = db.Column(db.Integer)
    attack = db.Column(db.Integer)
    defense = db.Column(db.Integer)
    sp_attack = db.Column(db.Integer)
    sp_defense = db.Column(db.Integer)
    speed = db.Column(db.Integer)
    generation = db.Column(db.Integer)
    legendary = db.Column(db.Boolean)

    def __init__(self, name, type_1, type_2, total, hp, attack, defense, sp_attack, sp_defense, speed, generation, legendary):
        self.name = attack
        self.type_1 = type_2
        self.type_2 = type_2
        self.total = total
        self.hp = hp
        self.attack = attack
        self.defense = defense
        self.sp_attack = sp_attack
        self.sp_defense = sp_defense
        self.speed = speed
        self.generation = generation
        self.legendary = legendary

    def __repr__(self):
        return f'Pokemon({self.name})'

    def __str__(self):
        return f'{self.name}'
