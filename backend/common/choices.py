from enum import Enum


class ErrorCode(Enum):
    OBJECT_DOES_NOT_EXIST = "object_does_not_exist"
    BAD_REQUEST = "bad_request"
    SET_PASSWORD_INVALID_TOKEN = "set_password_invalid_token"
    WEAK_PASSWORD = "weak_password"
    CONFIRM_PASSWORD_DOES_NOT_MATCH = "confirm_password_does_not_match"
    WRONG_PASSWORD = "wrong_password"
