/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@jest/globals";
import { City, Comment } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { CreateComment } from "../../src/interfaces/createData.js";
import { commentsRepository } from "../../src/repositories/commentsRepository.js";
import { commentsService } from "../../src/services/commentsServices.js";

describe("Comments Service Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("should return not found if the city id is not registered (insert comment)", async () => {
    const comment: CreateComment = {
      comment: faker.animal.bird(),
      userId: 1,
      cityId: 1,
    };
    jest.spyOn(commentsRepository, "findCity").mockResolvedValueOnce(null);
    await expect(commentsService.insertComment(comment)).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should insert a comment", async () => {
    const comment: CreateComment = {
      comment: faker.animal.bird(),
      userId: 1,
      cityId: 1,
    };
    const city: City = {
      id: 1,
      name: faker.animal.cat(),
      short_call: faker.lorem.words(),
      description: faker.lorem.lines(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };
    jest.spyOn(commentsRepository, "findCity").mockResolvedValueOnce(city);
    await commentsService.insertComment(comment);
    expect(commentsRepository.insertComment).toBeCalled;
  });

  it("should return not found if the city id is not registered (get city comment)", async () => {
    const comment: CreateComment = {
      comment: faker.animal.bird(),
      userId: 1,
      cityId: 1,
    };
    jest.spyOn(commentsRepository, "findCity").mockResolvedValueOnce(null);
    await expect(
      commentsService.getCityComments(comment.cityId)
    ).rejects.toEqual({
      message: "City not registered!",
      type: "not_found",
    });
  });

  it("should get the comments of a city", async () => {
    const city: City = {
      id: 1,
      name: faker.animal.cat(),
      short_call: faker.lorem.words(),
      description: faker.lorem.lines(),
      url_picture: faker.internet.url(),
      creat_at: faker.date.soon(),
      stateId: 1,
    };
    jest.spyOn(commentsRepository, "findCity").mockResolvedValueOnce(city);
    await commentsService.getCityComments(city.id);
    expect(commentsRepository.getCityComments).toBeCalled;
  });

  it("should return not found if tries to delete a comment that do not exists", async () => {
    const delComment = {
      commentId: 1,
      comment: faker.lorem.words(),
      userId: 1,
    };
    jest.spyOn(commentsRepository, "findComment").mockResolvedValueOnce(null);
    await expect(
      commentsService.deleteComment(delComment.commentId, delComment.userId)
    ).rejects.toEqual({
      message: "Comment do not exist!",
      type: "not_found",
    });
  });

  it("should return unauthorized in case of the comment do not belongs to user", async () => {
    const comment: Comment = {
      id: 3,
      comment: faker.lorem.words(),
      creat_at: faker.date.soon(),
      userId: 2,
      cityId: 1,
    };

    const commentUser: Comment[] = [
      {
        id: 1,
        comment: faker.lorem.words(),
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 1,
      },
      {
        id: 2,
        comment: faker.lorem.words(),
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 2,
      },
    ];

    const delInfos = {
      commentId: 3,
      comment: faker.lorem.words(),
      userId: 2,
    };

    jest
      .spyOn(commentsRepository, "findComment")
      .mockResolvedValueOnce(comment);
    jest
      .spyOn(commentsRepository, "getComments")
      .mockResolvedValueOnce(commentUser);
    await expect(
      commentsService.deleteComment(delInfos.commentId, delInfos.userId)
    ).rejects.toEqual({
      message: "Comment do not belongs to user!",
      type: "unauthorized",
    });
  });

  it("should delete the comment", async () => {
    const comment: Comment = {
      id: 2,
      comment: faker.lorem.words(),
      creat_at: faker.date.soon(),
      userId: 1,
      cityId: 2,
    };

    const commentUser: Comment[] = [
      {
        id: 1,
        comment: faker.lorem.words(),
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 1,
      },
      {
        id: 2,
        comment: comment.comment,
        creat_at: comment.creat_at,
        userId: 1,
        cityId: 2,
      },
    ];

    const delInfos = {
      commentId: comment.id,
      comment: comment.comment,
      userId: comment.userId,
    };

    jest
      .spyOn(commentsRepository, "findComment")
      .mockResolvedValueOnce(comment);
    jest
      .spyOn(commentsRepository, "getComments")
      .mockResolvedValueOnce(commentUser);
    jest.spyOn(commentsRepository, "deleteComment").mockResolvedValueOnce(null);
    await commentsService.deleteComment(delInfos.commentId, delInfos.userId);
    expect(commentsRepository.deleteComment).toBeCalled;
  });

  it("should return not found if tries to update a comment that do not exists", async () => {
    const upComment = {
      commentId: 1,
      comment: faker.lorem.words(),
      userId: 1,
    };
    jest.spyOn(commentsRepository, "findComment").mockResolvedValueOnce(null);
    await expect(
      commentsService.updateComment(
        upComment.commentId,
        upComment.comment,
        upComment.userId
      )
    ).rejects.toEqual({
      message: "Comment do not exist!",
      type: "not_found",
    });
  });

  it("should return unauthorized in case of the comment do not belongs to user", async () => {
    const comment: Comment = {
      id: 3,
      comment: faker.lorem.words(),
      creat_at: faker.date.soon(),
      userId: 2,
      cityId: 1,
    };

    const commentUser: Comment[] = [
      {
        id: 1,
        comment: faker.lorem.words(),
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 1,
      },
      {
        id: 2,
        comment: faker.lorem.words(),
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 2,
      },
    ];

    const upInfos = {
      commentId: 3,
      comment: faker.lorem.words(),
      userId: 2,
    };

    jest
      .spyOn(commentsRepository, "findComment")
      .mockResolvedValueOnce(comment);
    jest
      .spyOn(commentsRepository, "getComments")
      .mockResolvedValueOnce(commentUser);
    await expect(
      commentsService.updateComment(
        upInfos.commentId,
        upInfos.comment,
        upInfos.userId
      )
    ).rejects.toEqual({
      message: "Comment do not belongs to user!",
      type: "unauthorized",
    });
  });

  it("should update the comment", async () => {
    const comment: Comment = {
      id: 2,
      comment: faker.lorem.words(),
      creat_at: faker.date.soon(),
      userId: 1,
      cityId: 2,
    };

    const commentUser: Comment[] = [
      {
        id: 1,
        comment: faker.lorem.words(),
        creat_at: faker.date.soon(),
        userId: 1,
        cityId: 1,
      },
      {
        id: 2,
        comment: comment.comment,
        creat_at: comment.creat_at,
        userId: 1,
        cityId: 2,
      },
    ];

    const upInfos = {
      commentId: comment.id,
      comment: comment.comment,
      userId: comment.userId,
    };

    jest
      .spyOn(commentsRepository, "findComment")
      .mockResolvedValueOnce(comment);
    jest
      .spyOn(commentsRepository, "getComments")
      .mockResolvedValueOnce(commentUser);
    jest.spyOn(commentsRepository, "updateComment").mockResolvedValueOnce(null);
    await commentsService.updateComment(
      upInfos.commentId,
      upInfos.comment,
      upInfos.userId
    );
    expect(commentsRepository.updateComment).toBeCalledTimes(1);
  });
});
