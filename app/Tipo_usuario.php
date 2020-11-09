<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tipo_usuario extends Model
{
    protected $table = 'tipo_usuario';

    //Relacion Many To One / Muchos a uno
    public function usuario(){
        return $this->hasMany('App\Usuario');
    }

}
