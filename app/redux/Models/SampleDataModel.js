let APIURL = "http://dummy.restapiexample.com/api/v1/employees";

export const SampleDataModel = {
    state: {
        arrSampleData: [],
        isError: '',
        setarrSampleData: [],
    },
    reducers: {
        setSampleData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrSampleData: payload,
                isError: false,
            };
        },
        setSampleErrorData(state: Object, payload: Array<any>): Object {
            return {
                ...state,
                arrSampleData: payload,
                isError: true,
            };
        },
        clearData(state: Object): Object {
            return {
                ...state,
                arrSampleData: setarrSampleData,
                isError: '',
            };
        }
    },
    effects: (dispatch : any) => ({
        async fetchSampleData(APIdata) {
            if (APIdata.payload) {
                dispatch.SampleDataModel.clearData();
            } else {
                await fetch(APIURL, { method: 'GET' })
                    .then((response) => response.json())
                    .then((responseJSON) => {
                        dispatch.SampleDataModel.setSampleData(responseJSON);
                    }).catch((error) => {
                        dispatch.SampleDataModel.setSampleErrorData(error)
                    })
            }
        }
    })

}
