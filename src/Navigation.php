<?php

namespace Zareismail\QuickTheme;

use Illuminate\Support\Str;
use Illuminate\Http\Request;

abstract class Navigation 
{      
    /**
     * The callback used to authorize viewing the filter or action.
     *
     * @var \Closure|null
     */
    public static $seeCallback;

    /**
     * Determine if the filter or action should be available for the given request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    public static function authorizedToSee(Request $request)
    {
        return static::$seeCallback ? call_user_func(static::$seeCallback, $request) : true;
    }

    /**
     * Set the callback to be run to authorize viewing the filter or action.
     *
     * @param  \Closure  $callback
     * @return $this
     */
    public static function canSee(Closure $callback)
    {
        static::$seeCallback = $callback;

        return $this;
    }

    /**
     * Get the logical group associated with the resource.
     *
     * @return string
     */
    public static function group()
    { 
    }

    /**
     * Get the displayable label of the resource.
     *
     * @return string
     */
    public static function label()
    {
        return Str::title(Str::snake(class_basename(get_called_class()), ' '));
    } 

    /**
     * Get the router name.
     *
     * @return string
     */
    abstract public static function name();

    /**
     * Get the routers.
     *
     * @return string
     */
    public static function params(): array
    {
        return [
        ];
    }

    /**
     * Get the routers.
     *
     * @return string
     */
    public static function query(): array
    {
        return [
        ];
    }  

    /**
     * Get fields display instead of router link.
     *
     * @return string
     */
    public static function fields(): array
    {
        return [
        ];
    }
}
