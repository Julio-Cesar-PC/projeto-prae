<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class LoginController extends Controller
{
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user();
        // dd($googleUser);

        // verificando se o usuário já existe
        // se não existir, cria um novo usuário
        // se existir, atualiza o token
        $user = User::firstOrCreate(
            ['provider_id' => $googleUser->getId()],
            [
                'email' => $googleUser->getEmail(),
                'name' => $googleUser->getName(),
                'provider' => 'google',
                'provider_id' => $googleUser->getId(),
            ]
        );

        // autenticando o usuário
        auth()->login($user, true);

        // redirecionando o usuário para a home
        return redirect()->to('/dashboard');


    }
}
