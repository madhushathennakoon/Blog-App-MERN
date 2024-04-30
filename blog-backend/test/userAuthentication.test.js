const { loginUser, signupUser } = require("../controllers/userController");
const { userModel } = require("../models/userModel");

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

const mockRequest = (body) => ({
  body,
});

jest.setTimeout(30000);

/**
 * Mock services
 */
jest.mock("../library/jwtTokenBuilder.js", () => ({
  ...jest.requireActual("../library/jwtTokenBuilder.js"),
  createJWTToken: jest
    .fn()
    .mockImplementation(
      (_id) =>
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNDZkNTdhYTc0Y2U0YzA5ZTU5ZjAiLCJpYXQiOjE3MDcyMzA5NjEsImV4cCI6MTcwNzQ5MDE2MX0.3e0ud1rOmoANInPTw4jKWRk5Tz_x9KA4XhnmeS0pqZc"
    ),
}));

describe("Testing user controller signInUser", () => {
  test("signInUser should return 200 with token", async () => {
    const mock = jest.spyOn(userModel, "findOne");
    mock.mockImplementation(() =>
      Promise.resolve({
        _id: "65c246d57aa74ce4c09e59f0",
        name: "Yasindu",
        email: "tyasindu@gmail.com",
        password:
          "$2b$12$faCoZpbeRn2daZEKnWAAzenDSkIRYGeH5kV7weLuozv8qCqcoijOW",
      })
    );

    const req = mockRequest({
      email: "tyasindu@gmail.com",
      password: "Admin@1234",
    });

    const res = mockResponse();

    await loginUser(req, res);
    expect(mock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      email: "tyasindu@gmail.com",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNDZkNTdhYTc0Y2U0YzA5ZTU5ZjAiLCJpYXQiOjE3MDcyMzA5NjEsImV4cCI6MTcwNzQ5MDE2MX0.3e0ud1rOmoANInPTw4jKWRk5Tz_x9KA4XhnmeS0pqZc",
    });

    mock.mockRestore();
  });

  test("signInUser should return 400 when passwords do not match", async () => {
    const mock = jest.spyOn(userModel, "findOne");
    mock.mockImplementation(() =>
      Promise.resolve({
        _id: "65c246d57aa74ce4c09e59f0",
        email: "tyasindu@gmail.com",
        password:
          "$2b$12$faCoZpbeRn2daZEKnWAAzenDSkIRYGeH5kV7weLuozv8qCqcoijOW",
      })
    );

    const req = mockRequest({
      email: "tyasindu@gmail.com",
      password: "Thisisnotmypassword",
    });
    const res = mockResponse();

    await loginUser(req, res);
    expect(mock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "fail",
      message: "Incorrect password",
    });

    mock.mockRestore();
  });

  test("signInUser should return 400 when required fields are not filled", async () => {
    const req = mockRequest({
      email: "",
      password: "",
    });
    const res = mockResponse();

    await loginUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "fail",
      message: "All field must be filled",
    });
  });

  test("signInUser should return 400 when email is not valid", async () => {
    const mock = jest.spyOn(userModel, "findOne");
    mock.mockImplementation(() => Promise.resolve(null));

    const req = mockRequest({
      email: "Thisisnotmyemail",
      password: "Admin@1234",
    });

    const res = mockResponse();

    await loginUser(req, res);
    expect(mock).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "fail",
      message: "Incorrect email",
    });

    mock.mockRestore();
  });
});

describe("Testing user controller signUpUser", () => {
  test("signUpUser should return 200 with token", async () => {
    const mockFindOne = jest.spyOn(userModel, "findOne");
    mockFindOne.mockImplementation(() => Promise.resolve(null));
    const mockCreate = jest.spyOn(userModel, "create");
    mockCreate.mockImplementation(() =>
      Promise.resolve({
        _id: "65c246d57aa74ce4c09e59f0",
        name: "Yasindu",
        email: "tyasindu@gmail.com",
        password:
          "$2b$12$faCoZpbeRn2daZEKnWAAzenDSkIRYGeH5kV7weLuozv8qCqcoijOW",
      })
    );

    const req = mockRequest({
      email: "tyasindu@gmail.com",
      password: "Admin@1234",
      name: "Yasindu",
    });

    const res = mockResponse();

    await signupUser(req, res);
    expect(mockFindOne).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      email: "tyasindu@gmail.com",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyNDZkNTdhYTc0Y2U0YzA5ZTU5ZjAiLCJpYXQiOjE3MDcyMzA5NjEsImV4cCI6MTcwNzQ5MDE2MX0.3e0ud1rOmoANInPTw4jKWRk5Tz_x9KA4XhnmeS0pqZc",
    });

    mockFindOne.mockRestore();
    mockCreate.mockRestore();
  });

  test("signupUser should return 400 upon entering an existing email", async () => {
    const mockFindOne = jest.spyOn(userModel, "findOne");
    mockFindOne.mockImplementation(() =>
      Promise.resolve({
        email: "demo1@gmail.com",
      })
    );

    const req = mockRequest({
      email: "tyasindu@gmail.com",
      password: "Admin@1234",
      name: "Yasindu",
    });
    const res = mockResponse();

    await signupUser(req, res);
    expect(mockFindOne).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "fail",
      message: "Email already in use",
    });

    mockFindOne.mockRestore();
  });

  test("signUpUser should return 400 when required fields are not filled", async () => {
    const req = mockRequest({
      email: "",
      password: "",
      name: "",
    });

    const res = mockResponse();

    await signupUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      status: "fail",
      message: "All field must be filled",
    });
  });
});
