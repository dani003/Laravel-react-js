<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tipo_estado extends Model
{
    protected $table = 'tipo_estado';

    //Relacion Many To One / Muchos a uno
    public function reserva(){
        return $this->hasMany('App\Reserva');
    }

}
