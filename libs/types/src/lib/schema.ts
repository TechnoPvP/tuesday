/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/v1": {
    get: operations["AppController_getData"];
  };
  "/v1/boards": {
    get: operations["BoardsController_findAll"];
    post: operations["BoardsController_create"];
  };
  "/v1/boards/{id}": {
    get: operations["BoardsController_findOne"];
    delete: operations["BoardsController_remove"];
    patch: operations["BoardsController_update"];
  };
  "/v1/items": {
    get: operations["ItemsController_findAll"];
    post: operations["ItemsController_create"];
  };
  "/v1/items/{id}": {
    get: operations["ItemsController_findOne"];
    delete: operations["ItemsController_remove"];
    patch: operations["ItemsController_update"];
  };
  "/v1/boards/{boardId}/columns": {
    post: operations["ColumnsController_create"];
  };
  "/v1/columns": {
    get: operations["ColumnsController_findAll"];
  };
  "/v1/columns/{id}": {
    get: operations["ColumnsController_findOne"];
    delete: operations["ColumnsController_remove"];
    patch: operations["ColumnsController_update"];
  };
}

export interface components {
  schemas: {
    CreateBoardDto: {
      name: string;
      is_favorite?: boolean;
      /** @enum {string} */
      status?: "DOCUMENT" | "ITEM_BOARD";
      /** @enum {string} */
      type?: "DOCUMENT" | "ITEM_BOARD";
      folder_id?: string;
      description?: string;
    };
    FolderEntity: {
      name: string;
      id: number;
    };
    ColumnEntity: {
      /** @enum {string} */
      type: "AUTO_NUMBER" | "CHECKBOX" | "LONG_TEXT" | "TEXT" | "STATUS";
      title: string;
      description?: string;
      id: number;
      created_at: string;
    };
    ItemEntity: {
      name: string;
      column_values?: { [key: string]: unknown };
      board_id: { [key: string]: unknown };
      id: number;
      created_at: string;
    };
    BoardEntity: {
      name: string;
      is_favorite?: boolean;
      /** @enum {string} */
      status?: "DOCUMENT" | "ITEM_BOARD";
      /** @enum {string} */
      type?: "DOCUMENT" | "ITEM_BOARD";
      folder_id?: string;
      description?: string;
      id: number;
      created_at: string;
      folder: components["schemas"]["FolderEntity"];
      columns: components["schemas"]["ColumnEntity"][];
      items: components["schemas"]["ItemEntity"][];
    };
    UpdateBoardDto: { [key: string]: unknown };
    CreateItemDto: {
      name: string;
      column_values?: { [key: string]: unknown };
      board_id: { [key: string]: unknown };
    };
    UpdateItemDto: {
      name?: string;
      column_values?: { [key: string]: unknown };
      board_id?: { [key: string]: unknown };
    };
    CreateColumnDto: {
      /** @enum {string} */
      type: "AUTO_NUMBER" | "CHECKBOX" | "LONG_TEXT" | "TEXT" | "STATUS";
      title: string;
      description?: string;
    };
    UpdateColumnDto: {
      /** @enum {string} */
      type?: "AUTO_NUMBER" | "CHECKBOX" | "LONG_TEXT" | "TEXT" | "STATUS";
      title?: string;
      description?: string;
    };
  };
}

export interface operations {
  AppController_getData: {
    parameters: {};
    responses: {
      200: unknown;
    };
  };
  BoardsController_findAll: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["BoardEntity"][];
        };
      };
    };
  };
  BoardsController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["BoardEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateBoardDto"];
      };
    };
  };
  BoardsController_findOne: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["BoardEntity"];
        };
      };
    };
  };
  BoardsController_remove: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["BoardEntity"];
        };
      };
    };
  };
  BoardsController_update: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["BoardEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateBoardDto"];
      };
    };
  };
  ItemsController_findAll: {
    parameters: {};
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ItemEntity"][];
        };
      };
    };
  };
  ItemsController_create: {
    parameters: {};
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["ItemEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateItemDto"];
      };
    };
  };
  ItemsController_findOne: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ItemEntity"];
        };
      };
    };
  };
  ItemsController_remove: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ItemEntity"];
        };
      };
    };
  };
  ItemsController_update: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ItemEntity"];
        };
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateItemDto"];
      };
    };
  };
  ColumnsController_create: {
    parameters: {
      path: {
        boardId: number;
      };
    };
    responses: {
      201: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateColumnDto"];
      };
    };
  };
  ColumnsController_findAll: {
    parameters: {};
    responses: {
      200: unknown;
    };
  };
  ColumnsController_findOne: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  ColumnsController_remove: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: unknown;
    };
  };
  ColumnsController_update: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: unknown;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateColumnDto"];
      };
    };
  };
}

export interface external {}
