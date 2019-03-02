package bus

import (
	"github.com/slugbus/slugger"
)

// SlugResponse is a collection
// of Bus structs from the slugger wrapper
type SlugResponse []slugger.Bus

// BusDataPlusPlus is a structure that
// contains data from Bus but with more
// info
type BusDataPlusPlus struct {
	slugger.Bus
	Speed float64 `json:"speed"`
	Angle float64 `json:"angle"`
}

// SlugResponsePlusPlus is a collection of
// of BusDataPlusPlus
type SlugResponsePlusPlus []BusDataPlusPlus
