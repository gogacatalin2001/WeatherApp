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
view dailyData =
    div [ class "day" ]
      [ div [ class "day-date" ] 
        [ text <| formatDate dailyData.date ]
      , div [ class "day-hightemp" ] 
        [ text 
            <|
              case dailyData.highTemp of
                Nothing -> "unavailable"
                _ -> "H: " ++ String.fromFloat (Maybe.withDefault 0.0 dailyData.highTemp) 
        ]
      , div [ class "day-lowtemp" ] 
        [ text 
            <| 
              case dailyData.lowTemp of
                Nothing -> "unavailable"
                _ -> "L: " ++ String.fromFloat (Maybe.withDefault 0.0 dailyData.lowTemp) 
        ]
      , div [ class "day-precipitation" ] 
        [ text 
            <| "Total precipitation: " ++ String.fromFloat dailyData.totalPrecipitaion 
        ]
      ]
