from flask import request, Blueprint
from flask_restful import Api, Resource

from .schemas import PokemonSchema
from ..models import Pokemon

pokemon_v1_0_bp = Blueprint('pokemon_v1_0_bp', __name__) # Define Bluprint pokemon_v1_0_bp, Allow create others resources in others package from aplication
pokemon_schema = PokemonSchema()
api = Api(pokemon_v1_0_bp)                               # Instance from pokemon_v1_0_bp. Expouce own methods of Flask-Restfuls Api


class PokemonListResource(Resource):
    def get(self):
        pokemons = Pokemon.get_all()
        print(len(pokemons))
        result = pokemon_schema.dump(pokemons, many=True)
        return result


class PokemonResource(Resource):
    def get(self, pkm_id):
        pokemon = Pokemon.get_by_id(pkm_id)

        if pokemon is None:
              raise ObjectNotFound('The pokemon not exist')

        result = pokemon_schema.dump(pokemon)
        return result


# Define resources associated to the url
api.add_resource(PokemonListResource, '/api/v1.0/pokemons', endpoint='pokemon_list_resource')
api.add_resource(PokemonResource, '/api/v1.0/pokemons/<int:pkm_id>', endpoint='pokemon_resource')
