<?php

namespace Zareismail\QuickTheme;

use Illuminate\Http\Request; 

trait ResolvesCards
{    
    /**
     * All of the registered QuickTime cards.
     *
     * @var array
     */
    public static $cards = [];

    /**
     * Get the cards that are available for the given request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Support\Collection
     */
    public function availableCards(Request $request)
    {
        return $this->resolveCards($request)->filter->authorize($request)->values();
    }

    /**
     * Get the cards for the given request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Support\Collection
     */
    public function resolveCards(Request $request)
    {
        return collect(array_values(static::$cards));
    }

    /**
     * Get the cards available on the entity.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public static function cards(array $cards)
    {
        static::$cards = array_merge(static::$cards, $cards);

        return new static;
    }
}
