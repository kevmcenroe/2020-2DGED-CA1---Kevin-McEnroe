class ObjectManager{

    context;
    sprites;

    constructor(context){
        this.context = context;
        this.sprites = new Array();
    }

    Add(sprite){
        this.sprites.push(sprite);
    }

    Remove(sprite){

    }

    //"ActorType.Pickup", "key"
    Remove(actorType, id){
        for(let i = 0; i < this.sprites.length; i++){
            var sprite = this.sprites[i];

            if(sprite.ActorType === actorType && sprite.id === id){
                this.sprites.splice(i, 1);  //a,b,g
            }
        }
    }


    Update(){

    }

    Draw(){
        this.context.save();
        for(let i = 0; i < this.sprites.length; i++){
          var sprite = this.sprites[i];
            sprite.Draw();
        }
        this.context.restore();
    }

}