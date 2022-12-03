module View.Week exposing (..)

import Html exposing (..)
import Html.Attributes exposing (class, style)
import Html.Events exposing (..)
import Util.Time exposing (Date, formatDate)
import Util
import View.Day exposing (DailyData)


type alias WeeklyData =
    { dailyData : List DailyData
    }


{-| Generates Html based on `WeeklyData`

Some relevant functions:

  - `Util.Time.formatDate`

-}
view : WeeklyData -> Html msg
view data =
    let
      -- firstDay = Util.minimumBy .date data.dailyData
      -- lastDay = Util.maximumBy .date data.dailyData

      renderDailyData dataList =
        case dataList of
          [] -> div [] []
          d::ds ->
            -- if d == first then
            --     div [ class "day" ]
            --     [ div [ class "day-date" ] [ h2 [] [ text <| formatDate d.date ] ]
            --     , div [ class "day-hightemp" ] [ text <| "H: " ++ String.fromFloat (Maybe.withDefault 0 d.highTemp) ]
            --     , div [ class "day-lowtemp" ] [ text <| "L: " ++ String.fromFloat (Maybe.withDefault 0 d.lowTemp) ]
            --     , div [ class "day-precipitation" ] [ text <| "Total precipitation: " ++ String.fromFloat d.totalPrecipitaion ]
            --     ]
            -- else if d == last then
            --     div [ class "day" ]
            --     [ div [ class "day-date" ] [ h2 [] [ text <| formatDate d.date ] ]
            --     , div [ class "day-hightemp" ] [ text <| "H: " ++ String.fromFloat (Maybe.withDefault 0 d.highTemp) ]
            --     , div [ class "day-lowtemp" ] [ text <| "L: " ++ String.fromFloat (Maybe.withDefault 0 d.lowTemp) ]
            --     , div [ class "day-precipitation" ] [ text <| "Total precipitation: " ++ String.fromFloat d.totalPrecipitaion ]
            --     ]
            -- else
              View.Day.view d
    in
    div [ class "week" ] [ renderDailyData data.dailyData ] 
