<?php

namespace Zareismail\QuickTheme;

use Illuminate\Support\Collection; 
use Illuminate\Http\Request; 

class NavigationCollection extends Collection
{  
    /**
     * Return the authorized navigations of the collection.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Laravel\Nova\ResourceCollection
     */
    public function authorized(Request $request)
    {
        return $this->filter(function ($navigation) use ($request) {
            return $navigation::authorizedToSee($request);
        });
    } 
}
