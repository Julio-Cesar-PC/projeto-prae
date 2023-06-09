<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Providers\RouteServiceProvider;

class LoginController extends Controller
{
    public function redirectToProvider()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleProviderCallback()
    {
        try {
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
                    'admin' => false,
                    'banned' => false,
                ]
            );

            // autenticando o usuário
            auth()->login($user, true);

            // redirecionando o usuário para a home
            return redirect(RouteServiceProvider::HOME);

        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
