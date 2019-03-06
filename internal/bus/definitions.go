package bus

import (
	"github.com/slugbus/taps"
)

// SlugResponse is a collection
// of Bus structs from the taps wrapper
type SlugResponse []taps.Bus

// BusDataPlusPlus is a structure that
// contains data from Bus but with more
// info
type BusDataPlusPlus struct {
	taps.Bus
	Speed float64 `json:"speed"`
	Angle float64 `json:"angle"`
}

// SlugResponsePlusPlus is a collection of
// of BusDataPlusPlus
type SlugResponsePlusPlus []BusDataPlusPlus
