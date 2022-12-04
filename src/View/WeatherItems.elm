module View.WeatherItems exposing (view)

import Html exposing (..)
import Html.Attributes as HA exposing (class, style)
import Html.Events exposing (..)
import Model.WeatherItems exposing (SelectedWeatherItems, WeatherItem(..))
import View.WeatherChart exposing (ShownItems)


checkbox : String -> Bool -> (WeatherItem -> Bool -> msg) -> WeatherItem -> Html msg
checkbox name state msg category =
    div [ style "display" "inline", class "checkbox" ]
        [ input [ HA.type_ "checkbox", onCheck (msg category), HA.checked state ] []
        , text name
        ]


type alias MsgMap msg =
    { onChangeSelection : WeatherItem -> Bool -> msg }


view : MsgMap msg -> SelectedWeatherItems -> Html msg
view msgMap { temperature, precipitation, minMax, currentTime } =
    div [] []
    -- [ checkbox "Temperature" msgMap.onChangeSelection (Model.WeatherItems.isItemSelected temperature) Temperature-- not working HOW TO CREATE A CHECKBOX??
    -- , checkbox "Precipitation" msgMap.onChangeSelection (Model.WeatherItems.isItemSelected precipitation) Precipitation
    -- , checkbox "Min-Max values" msgMap.onChangeSelection (Model.WeatherItems.isItemSelected minMax) MinMax
    -- , checkbox "Current Time" msgMap.onChangeSelection (Model.WeatherItems.isItemSelected currentTime) CurrentTime
    -- ]
    -- Debug.todo "view"
