<?php

namespace App\Listeners;

use App\Events\ChirpCreated;
use App\models\Uuser;
use App\Notifications\NewChirp;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class SendChirpCreatedNotifications implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        foreach (User::whereNot('id', $event->chirp->user_id)->cursor() as $user) {
            $user->notify(new NewChirp($event->chirp));
        }
    }

    /**
     * Handle the event.
     */
    public function handle(ChirpCreated $event): void
    {
        //
    }
}
