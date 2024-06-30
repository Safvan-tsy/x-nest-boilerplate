import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { Strategy as CustomStrategy } from 'passport-custom'

@Injectable()
export class PublicStrategy extends PassportStrategy(CustomStrategy, 'public') {
  constructor() {
    super()
  }

  // biome-ignore lint:
  authenticate(req: Request, options?: any): void {
    return this.success({ [Symbol.for('isPublic')]: true })
  }
}
