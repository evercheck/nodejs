import request from "request-promise";
import * as search from "./SearchController";

jest.mock("request-promise");

describe("SearchController", () => {

    test("an key value < 3", async () => {
        // (request as any).mockImplementation(() => '{"value": vn, "type": FeatureCollection, "feature": []}');
        const result = await search.getPlacesByName("vn");
        expect(result).toEqual({value: 'vn', type: 'FeatureCollection', features: []});
    });
});
