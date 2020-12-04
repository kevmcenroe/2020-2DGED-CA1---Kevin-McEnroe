//id = "enemy car 1"
const ActorType = {
    Player: 1,
    Background: 2,
    Pickup: 3,
    Vehicle: 4,
    UI: 5,
    Platform: 6
}


class Sprite{

    constructor(id, actorType, context, x, y, artist){
        this.id = id;
        this.actorType = actorType;
        this.context = context;
        this.x = x;
        this.y = y;
        this.artist = artist;
    }

    Update(){

    }

    Draw(){
        this.artist.Draw(this.context, this.x, this.y);
    }

    //value = Number, Boolean, String
    Clone(){
        return new Sprite(this.id, this.actorType, this.context, this.x, this.y, this.artist);
    }
}


class TextArtist{

    constructor(text, font){
        this.text = text;
        this.font = font;
    }
    Draw(context, x, y){
        context.save();
        context.font = this.font;
        context.fillText(this.text, x, y);
        context.restore();
    }

    Clone(){

    }
}

class RectangleArtist{

    constructor(w, h, lineWidth, strokeStyle){
        this.w = w;
        this.h = h;
        this.lineWidth = lineWidth;
        this.strokeStyle = strokeStyle;
    }
    Draw(context, x, y){
        context.save();
        context.lineWidth = this.lineWidth;
        context.strokeStyle = this.strokeStyle;
        context.strokeRect(x, y, this.w, this.h);
        context.restore();
    }

    Clone(){

    }
}



