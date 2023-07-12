import { User } from "@prisma/client";
import supertest from "supertest";

import App from "../app";
import { prismaMock } from "../prisma/mock";
import { ExpressUser } from "../utils/Types";

describe("GET /about", () => {
  // Run once before all the tests declared below
  beforeAll(function (done) {
    const app = new App();
    global.server = app.start();
    console.log("server setup");
    done();
  });

  afterAll(function (done) {
    global.server?.close();
    console.log("server stop");
    done();
  });

  // --- Test 1

  it("findUnique() returns user", async () => {
    const mockUserFind: User = {
      id: BigInt(1),
      email: "find@gmail.com",
      metadata: JSON.stringify({
        name: "Find",
      }),
    };

    prismaMock.user.findUnique.mockResolvedValue(mockUserFind);

    const response = await supertest.agent(global.server).get("/about");

    const { user } = response.body;

    expect(typeof user).toEqual("object");
    expect(typeof (user as ExpressUser).id).toEqual("string");
    expect((user as ExpressUser).email).toEqual("find@gmail.com");
  });

  // --- Test 2

  it("create() returns user", async () => {
    const mockUserCreate: User = {
      id: BigInt(1),
      email: "create@gmail.com",
      metadata: JSON.stringify({
        name: "Create",
      }),
    };

    prismaMock.user.findUnique.mockResolvedValue(null);
    prismaMock.user.create.mockResolvedValue(mockUserCreate);

    const response = await supertest.agent(global.server).get("/about");

    const { user } = response.body;

    expect(typeof user).toEqual("object");
    expect(typeof (user as ExpressUser).id).toEqual("string");
    expect((user as ExpressUser).email).toEqual("create@gmail.com");
  });
});
