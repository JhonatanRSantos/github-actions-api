interface GenericData { [key: string]: any }

interface Environment {
  ENVIRONMENT: string;
  AWS : {
    ACCESS_KEY_ID : string;
    SECRET_ACCESS_KEY : string;
    REGION : string;
  }
}
