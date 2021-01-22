<?php

namespace Zareismail\QuickTheme;

use Illuminate\Http\Request;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool; 

class QuickTheme extends Tool
{ 
    use ResolvesCards;

    /**
     * The registered navigation names.
     *
     * @var array
     */
    public static $navigations = [];

    /**
     * Perform any tasks that need to happen when the tool is booted.
     *
     * @return void
     */
    public function boot()
    { 
        Nova::provideToScript([ 
            'quick_theme' => function($request) {
                return $this->providedToScript($request);
            },
        ]);

        Nova::script('quick-theme', __DIR__.'/../dist/js/tool.js');
        Nova::style('quick-theme', __DIR__.'/../dist/css/tool.css');
    } 

    /**
     * Provided additional variables to the global Nova JavaScript object.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function providedToScript(Request $request)
    {
        return [
            'dashboards' => collect([$this->mainDashboard()])->merge($this->dashboardInformation($request)),

            'navigations' => $this->groupedNavigations($request),

            'cards' => $this->availableCards($request),
        ];
    }

    /**
     * Return main dashboard information.
     * 
     * @return array
     */
    public function mainDashboard()
    {
        return [
            'key'   => 'main',
            'label' => 'Dashboard',
            'meta'  => [],
        ];
    }

    /**
     * Get meta data information about all dashboards for client side consumption.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function dashboardInformation(Request $request)
    {
        return collect(Nova::availableDashboards($request))->map(function($dashboard) {
            return [
                'key'   => $dashboard::uriKey(),
                'label' => $dashboard::label(),
                'meta'  => $dashboard->meta(),
            ];
        });
    }  

    /**
     * Register the given navigations.
     *
     * @param  array  $navigations
     * @return static
     */
    public static function navigations(array $navigations)
    {
        static::$navigations = array_merge(static::$navigations, $navigations);

        return new static;
    }

    /**
     * Get meta data information about all navigations for client side consumption.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function groupedNavigations(Request $request)
    {
        return static::navigationInformation($request)->groupBy(function($navigation) {
            return $navigation['group'] ?? '';
        });
    } 

    /**
     * Get meta data information about all navigations for client side consumption.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function navigationInformation(Request $request)
    {
        return static::authorizedNavigations($request)->map(function($navigation) {
            return [
                'name'  => $navigation::name(), 
                'label' => $navigation::label(),
                'group' => $navigation::group(),
                'params'=> $navigation::params(),
                'query' => $navigation::query(),
                'fields'=> $navigation::fields(),
            ];
        });
    } 

    /**
     * Return authorized navigations.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Laravel\Nova\NavigationCollection
     */
    public static function authorizedNavigations(Request $request)
    {
        return static::navigationCollection()->authorized($request);
    }   

    /**
     * Return the base collection of navigations.
     *
     * @return \Laravel\Nova\NavigationCollection
     */
    private static function navigationCollection()
    {
        return NavigationCollection::make(static::$navigations);
    }
}
