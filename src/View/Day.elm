module View.Day exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, style)
import Html.Events exposing (..)
import Util.Time exposing (Date)
import Util.Time exposing (formatDate)


{-| Don't modify
-}
type alias DailyData =
    { date : Date
    , highTemp : Maybe Float
    , lowTemp : Maybe Float
    , totalPrecipitaion : Float
    }


{-| Generates Html based on `DailyData`

Some relevant functions:

  - `Util.Time.formatDate`

-}
view : DailyData -> Html msg
view data =
    div [ class "day" ]
      [ div [ class "day-date" ] [ text <| formatDate data.date ]
      , div [ class "day-hightemp" ] [ text <| "H: " ++ String.fromFloat (Maybe.withDefault 0 data.highTemp) ]
      , div [ class "day-lowtemp" ] [ text <| "L: " ++ String.fromFloat (Maybe.withDefault 0 data.lowTemp) ]
      , div [ class "day-precipitation" ] [ text <| "Total precipitation: " ++ String.fromFloat data.totalPrecipitaion ]
      ]
