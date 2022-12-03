module Model.WeatherData exposing
    ( ApiHourlyData
    , ApiWeatherData
    , HourlyDataPoint
    , decodeHourlyData
    , decodeWeatherData
    , toHourlyDataPoints
    )

import Json.Decode as Dec exposing (..)
import Time
import Iso8601


{-| Don't modify
-}
type alias HourlyDataPoint =
    { time : Time.Posix, temperature : Float, precipitation : Float }


{-| Don't modify
-}
type alias ApiHourlyData =
    { times : List Int
    , temperatures : List Float
    , precipitation : List Float
    }


{-| Don't modify
-}
type alias ApiWeatherData =
    { hourly : ApiHourlyData
    , utcOffset : Int
    }


{-| Converts the data received from the weather API to a list of hourly datapoints

**Note**: According to the [documentation], the `times` field is received as a **list of UNIX epoch times in seconds relative to GTM+0**.

To handle this:

1.  each timestamp has to be incremented by `utcOffset` (as indicated by the API documentation)
2.  after incrementing, each timestamp must be multipled by 1000 before it is passed to [Time.millisToPosix] (to convert it from seconds to milliseconds)

[documentation]: https://open-meteo.com/en/docs#api-documentation
[Time.Posix]: https://package.elm-lang.org/packages/elm/time/latest/Time#Posix
[Time.millisToPosix]: https://package.elm-lang.org/packages/elm/time/latest/Time#millisToPosix

    import Time

    hourlyData : ApiHourlyData
    hourlyData =
        { times = [ 1667772000, 1667775600, 1667779200, 1667782800 ]
        , temperatures = [ 6.9, 6.4, 5.6, 5.4 ]
        , precipitation = [ 0, 0.1, 0.2, 0.3 ]
        }


    weatherData : ApiWeatherData
    weatherData =
        { hourly = hourlyData
        , utcOffset = 7200
        }

    toHourlyDataPoints weatherData
    --> [ HourlyDataPoint (Time.millisToPosix 1667779200000) 6.9 0
    --> , HourlyDataPoint (Time.millisToPosix 1667782800000) 6.4 0.1
    --> , HourlyDataPoint (Time.millisToPosix 1667786400000) 5.6 0.2
    --> , HourlyDataPoint (Time.millisToPosix 1667790000000) 5.4 0.3
    --> ]

-}
toHourlyDataPoints : ApiWeatherData -> List HourlyDataPoint
toHourlyDataPoints apiWeatherData =
    let
        hourlyData = apiWeatherData.hourly
        utcOffset = apiWeatherData.utcOffset
    in
        List.map3 (\x y z -> HourlyDataPoint (Time.millisToPosix x) y z) hourlyData.times hourlyData.temperatures hourlyData.precipitation


{-| Decode the hourly data according to <https://open-meteo.com/en/docs#api-documentation>

Relevant fields:

  - time
  - temperature\_2m
  - precipitation

Some relevant functions (see Lab 7 and the [Json.Decode] module documentation for more details):

  - [Json.Decode.list].
  - [Json.Decode.field]
  - [Json.Decode.map3]

[Json.Decode]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode
[Json.Decode.list]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode#list
[Json.Decode.field]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode#field
[Json.Decode.map3]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode#map3

-}
decodeHourlyData : Dec.Decoder ApiHourlyData
decodeHourlyData =
    Dec.map3 ApiHourlyData
        (Dec.field "time" (Dec.list Dec.int))
        (Dec.field "temperature_2m" (Dec.list Dec.float))
        (Dec.field "precipitation" (Dec.list Dec.float))


{-| Decode the weather data according to <https://open-meteo.com/en/docs#api-documentation>

Relevant fields:

  - hourly: see `decodeHourlyData`
  - utc\_offset\_seconds

Some relevant functions (see Lab 7 and the [Json.Decode] module documentation for more details):

  - [Json.Decode.field]
  - [Json.Decode.map2]

[Json.Decode]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode
[Json.Decode.field]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode#field
[Json.Decode.map2]: https://package.elm-lang.org/packages/elm/json/latest/Json-Decode#map2

-}
decodeWeatherData : Dec.Decoder ApiWeatherData
decodeWeatherData =
    Dec.map2 ApiWeatherData
        (Dec.field "hourly" decodeHourlyData)
        (Dec.field "utc_offset_seconds" Dec.int)
